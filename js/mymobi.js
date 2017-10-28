
//个人资料滑动效果
$(function () {

    $('.mobiselect').mobiscroll().select({
        theme: 'ios',
        lang: 'zh',
        display: 'center',
        minWidth: 200
    });

});



//年龄范围双选



$(function () {

    var fromValues = [],
        toValues = [];

    for (var i = 18; i <= 99; i ++) {
        fromValues.push({
            display: i + '岁',
            value: i
        });
    }

    toValues = fromValues.slice();
    toValues.shift();
    toValues.push({
        display: '99岁以上'
    });

    $('#doubleSelectAge').mobiscroll().scroller({
        theme: 'ios',
        lang: 'zh',
        display: 'center',
        width: 150,
        wheels: [
            [{
                circular: false,
                data: fromValues,
                label: '从'
            }, {
                circular: false,
                data: toValues,
                label: '到'
            }]
        ],
        showLabel: false,
        minWidth: 130,
        cssClass: 'md-pricerange',
        validate: function (event, inst) {
            var i,
                values = event.values,
                disabledValues = [];

            for (i = 0; i < toValues.length; ++i) {
                if (toValues[i].value <= values[0]) {
                    disabledValues.push(toValues[i].value);
                }
            }

            return {
                disabled: [
                    [], disabledValues
                ]
            }
        },
        formatValue: function (data) {
            return data[0] + '岁 - ' + data[1]+ '岁';
        },
        parseValue: function (valueText) {
            if (valueText) {
                return valueText.replace(/\s/gi, '').split('-');
            }
            return [22, 26];
        }
    });
});

//身高范围双选


$(function () {

    var fromValues = [],
        toValues = [];

    for (var i = 129; i <= 211; i ++) {
        fromValues.push({
            display: i + 'cm',
            value: i
        });
    }

    toValues = fromValues.slice();
    toValues.shift();
    toValues.push({
        display: '211以上'
    });

    $('#doubleSelectHeight').mobiscroll().scroller({
        theme: 'ios',
        lang: 'zh',
        display: 'center',
        width: 150,
        wheels: [
            [{
                circular: false,
                data: fromValues,
                label: '从'
            }, {
                circular: false,
                data: toValues,
                label: '到'
            }]
        ],
        showLabel: false,
        minWidth: 130,
        cssClass: 'md-pricerange',
        validate: function (event, inst) {
            var i,
                values = event.values,
                disabledValues = [];

            for (i = 0; i < toValues.length; ++i) {
                if (toValues[i].value <= values[0]) {
                    disabledValues.push(toValues[i].value);
                }
            }

            return {
                disabled: [
                    [], disabledValues
                ]
            }
        },
        formatValue: function (data) {
            return data[0] + 'cm - ' + data[1]+ 'cm';
        },
        parseValue: function (valueText) {
            if (valueText) {
                return valueText.replace(/\s/gi, '').split('-');
            }
            return [155, 175];
        }
    });
});


//地区三级选择


$(function () {
    $('.address-birth,.per-address-birth').mobiscroll().treelist({
        theme: 'ios',
        lang: 'zh',
        display: 'center',
        width: [110, 100, 150],
        title: '籍贯',
        placeholder: '籍贯',
        labels: ['省', '市', '县']
    });
});


$(function () {
    $('.address-work,.per-address-work').mobiscroll().treelist({
        theme: 'ios',
        lang: 'zh',
        display: 'center',
        width: [110, 100, 150],
        placeholder: '所在地',
        labels: ['省', '市', '县']
    });
});


//出生日期选择

$(function () {
    var now = new Date(),
        minDate = new Date(now.getFullYear() - 99, 0, 1),
        maxDate = new Date(now.getFullYear() - 18, 11, 31);

    $('.mobi-birthday').mobiscroll().date({
        theme: 'ios',
        lang: 'zh',
        display: 'center',
        min: minDate,
        max: maxDate
    });

});













