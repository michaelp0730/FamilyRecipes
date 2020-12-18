<?
    $breakfast_file = file_get_contents("./json/breakfast.json");
    $salads_file = file_get_contents("./json/salads.json");
    $soups_file = file_get_contents("./json/soups.json");
    $entrees_file = file_get_contents("./json/entrees.json");
    $sides_file = file_get_contents("./json/sides.json");
    $desserts_file = file_get_contents("./json/desserts.json");

    $breakfast_json = json_decode($breakfast_file, true);
    $salads_json = json_decode($salads_file, true);
    $soups_json = json_decode($soups_file, true);
    $entrees_json = json_decode($entrees_file, true);
    $sides_json = json_decode($sides_file, true);
    $desserts_json = json_decode($desserts_file, true);
?>

<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Pellegrini Page | Family Recipes</title>
    <link rel="stylesheet" href="./app.css" />
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif] -->
</head>

<body>
    <div class="wrapper">
        <h1>Family <span>Recipes</span></h1>
        <div class="group">
            <span class="index-subheading">This is a collection of recipes from our family and friends. Lots of special stuff in here. Please enjoy and eat well!</span>
            <form id="recipes-search-form" class="recipes-search-form">
                <label for="recipes-search">Search recipes:</label>
                <input type="text" id="recipes-search" class="recipes-search" />
                <button type="reset" name="Clear Search" class="clear-search-btn">Clear Search</button>
            </form>
        </div>

        <section id="section-breakfast" class="container group">
            <h2 class="breakfast heading-label label">Breakfast</h2>
            <ul class="link-list">
                <?
                    foreach ($breakfast_json as $key => $breakfast_value) {
                ?>
                    <li>
                        <a href="./recipes/?slug=<?php echo $breakfast_value['slug'] ?>&type=<?php echo $breakfast_value['type'] ?>">
                            <?php echo $breakfast_value['title'] ?>
                        </a>
                    </li>
                <?
                    }
                ?>
            </ul>
        </section>

        <section id="section-salads" class="container group">
            <h2 class="salads heading-label label">Salads</h2>
            <ul class="link-list">
                <?
                    foreach ($salads_json as $key => $salad_value) {
                ?>
                    <li>
                        <a href="./recipes/?slug=<?php echo $salad_value['slug'] ?>&type=<?php echo $salad_value['type'] ?>">
                            <?php echo $salad_value['title'] ?>
                        </a>
                    </li>
                <?
                    }
                ?>
            </ul>
        </section>

        <section id="section-soups" class="container group">
            <h2 class="soups heading-label label">Soups</h2>
            <ul class="link-list">
            <?
                foreach ($soups_json as $key => $soup_value) {
            ?>
                <li>
                    <a href="./recipes/?slug=<?php echo $soup_value['slug'] ?>&type=<?php echo $soup_value['type'] ?>">
                        <?php echo $soup_value['title'] ?>
                    </a>
                </li>
            <?
                }
            ?>
            </ul>
        </section>

        <section id="section-entrees" class="container group">
            <h2 class="entrees heading-label label">Entrees</h2>
            <ul class="link-list">
                <?
                    foreach ($entrees_json as $key => $entree_value) {
                ?>
                    <li>
                        <a href="./recipes/?slug=<?php echo $entree_value['slug'] ?>&type=<?php echo $entree_value['type'] ?>">
                            <?php echo $entree_value['title'] ?>
                        </a>
                    </li>
                <?
                    }
                ?>
            </ul>
        </section>

        <section id="section-sides" class="container group">
            <h2 class="sides heading-label label">Sides</h2>
            <ul class="link-list">
                <?
                    foreach ($sides_json as $key => $side_value) {
                ?>
                    <li>
                        <a href="./recipes/?slug=<?php echo $side_value['slug'] ?>&type=<?php echo $side_value['type'] ?>">
                            <?php echo $side_value['title'] ?>
                        </a>
                    </li>
                <?
                    }
                ?>
            </ul>
        </section>

        <section id="section-desserts" class="container group">
            <h2 class="desserts heading-label label">Desserts</h2>
            <ul class="link-list">
                <?
                    foreach ($desserts_json as $key => $dessert_value) {
                ?>
                    <li>
                        <a href="./recipes/?slug=<?php echo $dessert_value['slug'] ?>&type=<?php echo $dessert_value['type'] ?>">
                            <?php echo $dessert_value['title'] ?>
                        </a>
                    </li>
                <?
                    }
                ?>
            </ul>
        </section>
    </div>
</body>
</html>