<!DOCTYPE html>
<html>
    <head>
        <title>Werner: <?= $title ?></title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="images/favicon.png">
        <link rel="stylesheet" type="text/css" href="css/custom.css">
        <link rel="stylesheet" href="css/uikit.min.css" />
        <script src="js/uikit.min.js"></script>
        <script src="js/uikit-icons.min.js"></script>
    </head>
    <body>
<div class="tm-page">
	<div class="tm-header-mobile uk-hidden@m">
		<div class="tm-headerbar-top">
			<div class="uk-container uk-flex uk-flex-wrap uk-flex-between hrd-top">
				<div class="uk-logo">
					<a href="/"> <img alt="" src="images/logo.png"></a>
				</div>
				<div class="uk-flex">
				<div class="hrd-contacts">
					<div class="hdr-phone"><a href="tel:88006003055"></a></div>
				</div>
				<div class="hdr-login">
					<a class="login-widget" href="#link"> </a>
				</div>
				<nav uk-navbar="" class="uk-navbar">
					<div class="uk-navbar-right">
						<a class="uk-navbar-toggle" href="#tm-mobile" uk-toggle="" aria-expanded="false">
							<div uk-navbar-toggle-icon="" class="uk-icon uk-navbar-toggle-icon"></div>
						</a>
					</div>
				</nav>
				</div>
			</div>
		</div>
		<div id="tm-mobile" uk-offcanvas="" mode="slide" overlay="" class="uk-offcanvas">
			<div class="uk-offcanvas-bar">
				<button class="uk-offcanvas-close uk-icon uk-close" type="button" uk-close=""></button>
				<div class="uk-child-width-1-1 uk-grid uk-grid-stack" uk-grid="">
					<div>
						<div class="uk-panel">
							<ul class="uk-nav-default uk-nav-parent-icon uk-nav-parent-icon" uk-nav>
								<li><a href="/" class="menu-item">Главная</a></li>
								<li><a href="#link" class="menu-item">Услуги</a></li>
								<li><a href="#link" class="menu-item">Тарифы</a></li>
								<li><a href="index.php?c=page&act=sendfirstform" class="menu-item">Оформить</a></li>
								<li><a href="#link" class="menu-item">Отследить</a></li>
								<li><a href="#link" class="menu-item">Контакты</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="tm-header uk-visible@m" uk-header>
		<div class="tm-headerbar-top">
			<div class="uk-container uk-flex uk-flex-middle uk-flex-between hrd-top">
				<div class="uk-logo">
					<a href="/"> <img alt="" src="/images/logo.png" /></a>
				</div>
				<div class="uk-navbar-container">
					<div class="uk-container hrd-bottom">
						<nav class="uk-navbar" uk-navbar>
							<div class="grid-navbar uk-flex uk-flex-middle">
								<ul class="uk-navbar-nav uk-flex uk-flex-between">
									<li><a href="#link" class="menu-item">Услуги</a></li>
									<li><a href="#link" class="menu-item">Тарифы</a></li>
									<li><a href="index.php?c=page&act=sendfirstform" class="menu-item">Оформить</a></li>
									<li><a href="#link" class="menu-item">Отследить</a></li>
									<li><a href="#link" class="menu-item">Контакты</a></li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
				<div class="uk-navbar-right">
					<div class="hrd-contacts">
						<div class="hdr-phone"><a href="tel:88006003055">8 (800) 600-30-55</a></div>
					</div>
					<div class="hdr-login">
						<a class="login-widget" href="#link"> </a>
					</div>
				</div>
			</div>
		</div>
	</div>

    <?= $content ?>

    <div id="section-footer" class="uk-section uk-section-secondary">
        <div class="uk-container">
            <div class="tm-footerbar-top">
                <div class="uk-container uk-flex uk-flex-middle uk-flex-between hrd-top">
                    <div class="uk-logo">
                        <a href="/"> <img alt="" src="/images/logo.png" /></a>
                    </div>
                    <div class="uk-navbar-container uk-visible@m">
                        <div class="uk-container hrd-bottom">
                            <nav class="uk-navbar" uk-navbar>
                                <div class="grid-navbar uk-flex uk-flex-middle">
                                    <ul class="uk-navbar-nav uk-flex uk-flex-between">
                                        <li><a href="#link" class="menu-item">Услуги</a></li>
                                        <li><a href="#link" class="menu-item">Тарифы</a></li>
                                        <li><a href="nextpage.php" class="menu-item">Оформить</a></li>
                                        <li><a href="#link" class="menu-item">Отследить</a></li>
                                        <li><a href="#link" class="menu-item">Контакты</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div class="uk-navbar-right">
                        <div class="hrd-contacts">
                            <div class="hdr-phone"><a href="tel:88006003055">8 (800) 600-30-55</a></div>
                        </div>
                        <div class="hdr-login uk-visible@m"> <a class="login-widget" href="#link">
                                Личный кабинет
                            </a> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </body>
</html>
