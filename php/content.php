<?php  if(!isset($_GET['page'])) : ?>
    <?php include 'pages/front.php'; ?>
<?php else : ?>
    <?php include "pages/{$_GET['page']}.php"; ?>
<?php endif; ?>