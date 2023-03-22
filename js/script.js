function validate() {
    
    var blogName = document.f1.blogname.value;
    var blog = document.f1.blog.value;
    var alphaExp = /^[A-Za-z0-9 ]+.+$/;
    status1 = status2 = false;
    if (blogName == "") {
        document.getElementById('blognameNote').innerHTML = "Please Enter Blog Name"
        status1 = false;
    }
    else {
        if (blogName.match(alphaExp)) {
            document.getElementById('blognameNote').innerHTML = ""
            status1 = true;
        }
        else {
            document.getElementById('blognameNote').innerHTML = "Please Enter Valid Blog Name"
            status1 = false;
        }
    }
    if (blog == "") {
        document.getElementById('blogNote').innerHTML = "Please Enter Blog"
        status2 = false;
    }
    else {
        if (blog.match(alphaExp)) {
            document.getElementById('blogNote').innerHTML = ""
            status2 = true;
        }
        else {
            document.getElementById('blogNote').innerHTML = "Please Enter Valid Blog"
            status2 = false;

        }
    }
    if (status1 == true && status2 == true) {
        addData();
         return true;
    }
    else {
        return false;
    }
}

function addData() {
    // Get form data
    var addBlogName = document.getElementById('blogname').value;
    var addBlog = document.getElementById('blog').value;


    // Create data element
    var dataElem = document.createElement('div');
    dataElem.innerHTML = '<h1>' + addBlogName + '</h1>' +
        '<p>' + addBlog + '</p>';

    // Append data element to list
    var dataList = document.getElementById('dataList');
    dataList.appendChild(dataElem);

    // Reset form
    //document.getElementById('myForm').reset();
}


