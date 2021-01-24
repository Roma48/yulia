<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>GEEKHub</title>
    <link rel="stylesheet" type="text/css" href="reset.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script defer src="https://use.fontawesome.com/releases/v5.15.1/js/all.js"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.15.1/js/v4-shims.js"></script>
</head>
<body>
<?php  if($_SERVER['REQUEST_URI'] === '/php/' || $_SERVER['QUERY_STRING'] === 'page=1') : ?>
    <?php include 'header-front.php'; ?>
<?php else : ?>
    <?php include 'header.php'; ?>
<?php endif; ?>

<?php include 'content.php'; ?>

<?php include 'footer.php'; ?>
</body>
</html>