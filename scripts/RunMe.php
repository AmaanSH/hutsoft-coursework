<?php 
// DB CONNECTION INFO
$server = 'localhost';
$username = 'ammansha_root';
$password = 'MkRO6,JpE}K^';
$database = 'ammansha_guestbook';

// Establish a new connectiong to the DB
$conn = new mysqli($server, $username, $password, $database);

if ($conn->connect_errno > 0)
{
    die('Unable to connect to database [' . $conn->connect_error . ']');
    echo "<br>";
}
else
{
    echo "<br>Successful connection to $database<br>";
    
    // retrieve fields from the form
    $name = $_POST["fname"];
    $email = $_POST["femail"];
    $comment = $_POST["fcomment"];

    $date = date("Y-m-d");
    echo "A comment has been left: $comment";

    // construct the query using the data from the input fields
    $sql = "INSERT INTO comments (NAME, EMAIL, COMMENT, DATE) VALUES('$name', '$email', '$comment', '$date')";

    // apply the query to the database, inserting the new comment, and record whether it went in OK
    $success = $conn->query($sql);

    if ($success !== TRUE)
    {
        // show error code to help us work out what has gone wrong
        $err = $conn->errno;
        echo "<br>There was a problem submitting your comment to our guestbook (error code $err). Please try again later";
    }
    else
    {
        <script type="text/javascript">
        window.location = "ViewGuestbook.php";</script>
    }
}

?>