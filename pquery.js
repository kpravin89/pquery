/*-------------------------------------------------------------------------------------------------------
    Name                :   Project p (pquery Core - $.p)
    Author              :   Pravinkumar K
    Version             :   0.1
    Created Date        :   28-Apr-2015
    Description         :

    History:
-------------------------------------------------------------------------------------------------------*/

$.p = {

    IsNullOrUndefined: function (obj) {
        /// <summary>
        /// If given object is Null or Undefined, return true. Else return false.
        /// </summary>
        /// <param name="obj">given Object</param>
    if (typeof obj === undefined || obj === null || obj === undefined) {
        return true;
        }
    
    },

    IsNullOrEmpty: function (obj) {
        if (typeof obj === undefined || obj === null || obj === undefined || obj.length == 0) {
            return true;
        }

    },

    JsonToDate: function (data) {

        return $.p.IsNullOrUndefined(data) ? new Date(1900, 01, 01) : new Date(parseInt(data.substr(6)));

},

    JsonToFormatDate: function (data, Formatstr) {

        if ($.p.IsNullOrUndefined(data)) return "-Not Available-";

        var result = $.p.IsNullOrUndefined(data) ? new Date(1900, 01, 01) : new Date(parseInt(data.substr(6)));
        return new moment(result).format(Formatstr);

    },

    strPad : function (i, l, s) {
        var o = i.toString();
        if (!s) { s = '0'; }
        while (o.length < l) {
            o = s + o;
        }
        return o;
    },

    IsArray: function (obj) {
        /// <summary>
        /// Test whether the object is array
        /// </summary>
        /// <param name="obj"></param>
        

        if (Object.prototype.toString.call(obj) === '[object Array]') {
            return true;
        }

        return false;
    }


       

};

$.fn.addHiddenInputData = function(data) {          
    var keys = {};          
    var addData = function(data, prefix) {          
        for(var key in data) {
            var value = data[key];
            if(!prefix) {
                var nprefix = key;                                            
            }else{
                var nprefix = prefix + '['+key+']';
            }
            if(typeof(value) == 'object') {                                    
                addData(value, nprefix);
                continue;
            }
            keys[nprefix] = value;
        }          
    }          
    addData(data);          
    var $form = $(this);      
    for(var k in keys) {
        $form.addHiddenInput(k, keys[k]);
    }

    return $form;

}
$.fn.addHiddenInput = function(key, value) {      
    var $input = $('<input type="hidden" name="'+key+'" />')
    $input.val(value);
    $(this).append($input);

}
