<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <link rel="stylesheet" href="css/student.css">
	<?php echo $__env->make('components.navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</head>
<body>
    <header>
        <h1>Welcome to NSBM Green University Accommodation</h1>
    </header>
    <nav>
        <ul>
            <li><a href="students_page">Home</a></li>
            <li><a href="all_post">All Posts</a></li>
        </ul>
    </nav>
    <div class="container">
        <h2>Advertisements</h2>
        <div class="advertisements">
            
            <div class="advertisement-card">
                <img src="img/1.jpg" alt="Property 1">
                <div class="details">
                    <h3>Property Title</h3>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Price: $1000/month</p>
                    <a href="post_page.html" class="details-btn">View Details</a>
                    <a href="#" class="reserve-btn">Reserve</a>
                </div>
            </div>
			<div class="advertisement-card">
                <img src="img/1.jpg" alt="Property 1">
                <div class="details">
                    <h3>Property Title</h3>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Price: $1000/month</p>
                    <a href="post_page.html" class="details-btn">View Details</a>
                    <a href="#" class="reserve-btn">Reserve</a>
                </div>
            </div>
			<div class="advertisement-card">
                <img src="img/1.jpg" alt="Property 1">
                <div class="details">
                    <h3>Property Title</h3>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Price: $1000/month</p>
                    <a href="post_page.html" class="details-btn">View Details</a>
                    <a href="#" class="reserve-btn">Reserve</a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
<?php /**PATH C:\Users\User\Desktop\nsbm_acc\resources\views/students_page.blade.php ENDPATH**/ ?>