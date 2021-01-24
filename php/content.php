<?php  if(!isset($_GET['page'])) : ?>
    <?php include 'pages/1.php'; ?>
<?php else : ?>
    <?php include "pages/{$_GET['page']}.php"; ?>
<?php endif; ?>