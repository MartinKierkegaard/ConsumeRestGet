$(function() {
    
    var output = '';

    $.ajax({
        type : 'GET',
        dataType: 'jsonp',
        url: 'http://localhost:2985/SchoolService.svc/teachers?callback=?',
        success: showTeachers
        });
    
        // $.getJSON('http://localhost:2985/SchoolService.svc/teachers?callback=?', showTeachers);


        $('.teachers').on('click', function(e) {
         if (e.target.className == 'glyphicon glyphicon-remove') 
            {
                var deleteUrl = 'http://localhost:2985/SchoolService.svc/teachers/' + e.target.id
                
              $.ajax({
                type: 'DELETE',
                url: deleteUrl,
                success: deleteTeacher,
                dataType: "json",
                crossDomain: true
              }); //ajax
            } // the target is a delete button
            
        }
        ); 
      


        function deleteTeacher(data){
            $.getJSON('http://localhost:2985/SchoolService.svc/teachers?callback=?', showTeachers);
        }

    function showTeachers(data) {
          output = '';
        $.each(data,function(key, item) {

            output += '     <div class="feedback-item item-list media-list">';
            output += '       <div class="feedback-item media">';
            output += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + item.Id + '" class="glyphicon glyphicon-remove"></span></button></div>';
            output += '         <div class="feedback-info media-body">';
            output += '           <div class="feedback-head">';
            output += '             <div class="feedback-title">' + item.Name +' '+ item.Id + ' <small class="feedback-name label label-info">' + item.MobileNo + '</small></div>';
            output += '           </div>';
            output += '         </div>';
            output += '       </div>';
            output += '     </div>';

          
            //   output += '<h3 id="' + key + ' class="delTeacher"'+'> ' + item.Name +'  </h3>';

            // output += '<div class=speakerlist> ' + item.MobileNo +'  </div>';
        });
        $('.teachers').html(output);
    }
    
   
});