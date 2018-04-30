$(function() {
    
    var output = '<h1>**TEACHERS**</h1>';

    $.ajax({
        type : 'GET',
        dataType: 'jsonp',
        url: 'http://localhost:2985/SchoolService.svc/teachers?callback=?',
        success: showTeachers
        });
    
        // $.getJSON('http://localhost:2985/SchoolService.svc/teachers?callback=?', showTeachers);


    
    function showTeachers(data) {
         output += '<h1>I loop</h1>';
        $.each(data,function(key, item) {
            if (item.Name === "Anders")
              output += '<h1 style="background-color:DodgerBlue;"> ' + item.Name +'  </h1>';
            else 
              output += '<h3> ' + item.Name +'  </h3>';

            output += '<div class=speakerlist> ' + item.MobileNo +'  </div>';
        });
        $('.teachers').html(output);
    }
    
    function showFail(data){
        output += '<h1>I FEJL</h1>';
        $('.teachers').html(output);
    }
  

});