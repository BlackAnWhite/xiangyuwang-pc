(function($) {
  $.fn.showCity = function(cityList) {
    var i, j, k, province, city, area, list = '';
    //循环出省份
    for (i = 0; i < cityList.length; i++) {
      province = cityList[i];
      list += '<li data-val="' + province['name'] + '">' + province['name'];
      if (province['sub']) {
        list += '<ul>';
        //循环出市
        for (j = 0; j < province['sub'].length; j++) {
          city = province['sub'][j];
          list += '<li data-val="' + city['name'] + '">' + city['name'];
          if (city['sub']) {
            list += '<ul>';
            //循环出区
            for (k = 0; k < city['sub'].length; k++) {
              area = city['sub'][k];
              list += '<li data-val="' + area['name'] + '">' + area['name'] + '</li>';
            }
            list += '</ul>';
          }
          list += '</li>';
        }
        list += '</ul>';
      }
      list += '</li>';
    }
    $(this).each(function(index, item) {
      $(item).html(list);
    });
  }
})(jQuery);