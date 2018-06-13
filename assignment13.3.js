var i,j,k=0; //var i,j,k are initialized
var result="";//var result is set to empty string; 
// userdetObj object stores JSON array and objects, student is an object having friends array values and nested college object has been initialized with college values
var userdetObj={"student":[{"name":"James","age":25,"weight":55,"height":165,"friends":['Rita','Mary','Lucy'],"college":[{"name":"Royal Technology","city":"Bengaluru","pincode":560001}]},
           {"name":"Ajay","age":34,"weight":69,"height":145,"friends":['Varun','Hari','Kiran','Rekha'],"college":[{"name":"Trident College","city":"Tumkur","pincode":560023}]},
            {"name":"Kate","age":21,"weight":65,"height":155,"friends":['Sandy','Joe','Andy'],"college":[{"name":"Jeevan College","city":"Belur","pincode":570001}]},
            {"name":"Hari","age":34,"weight":60,"height":169,"friends":['Bala','Gary','Teja','Vasu'],"college":[{"name":"Ray Technology","city":"Mysore","pincode":570012}]},
            {"name":"Swathi","age":45,"weight":65,"height":175,"friends":['Kavya','Rosy','Preethi'],"college":[{"name":"Grace College","city":"Bengaluru","pincode":560018}]}]};
            for (i in userdetObj.student) { //for every i iteration of student object variable stores the array element and object values in result variable and executed
                result+="<h4>"+"Student:"+"</h4>";//student heading
/* Access to student details */
                    result+="Student Name: "+userdetObj.student[i].name+" "+"Age: "+userdetObj.student[i].age+" "+"Weight: "+userdetObj.student[i].weight+" "+"Height: "+userdetObj.student[i].height;
                        result+="<h4>"+"Friends:"+"</h4>";//friends heading
                            for(j in userdetObj.student[i].friends){ 
                                result+=userdetObj.student[i].friends[j]+" ; ";//for every j iteration corresponding friends array details pertaining to each student is stored in result variable        
                            }
                                    result+="<h4>"+"College:"+"</h4>";//college heading
                                        for(k in userdetObj.student[i].college){
/* for every k iteration corresponding college object details pertaining to each student is stored in result variable */     
                                            result+="College Name: "+userdetObj.student[i].college[k].name+" "+"City: "+userdetObj.student[i].college[k].city+" "+"Pin code: "+userdetObj.student[i].college[k].pincode;
                }
            }