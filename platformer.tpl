<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="/static/css/main.css" />
  <script src="https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js"></script>
  <script type="text/javascript" src="/Minigames/Platformer/platformerFinalSceneless.js"></script>

</head>

<body>

	<div id="wrapper">

		<div id="header">

			<h1>Hochschule Coburg Minigames!</h1>

		</div>

		<div id="navigation">
			<ul>
				<li><a href="/">Hauptseite</a></li>
				<li><a href="/games">Spiele</a></li>
				<li><a href="/firstgame">Demo</a></li>
				<li><a href="/about">Über Uns</a></li>
			</ul>
		</div>

		<div id="section">
      <div id="gamesection">
        <div id="PlaySection">
          <script>StartPlatformerSceneless()</script>
        </div>
      </div>

      <div id="gamesection">
        <h2>Steuerung:</h2>
        <p1>
          <br><br>
          Pfeiltasten - Bewegung<br><br>
          Leertaste - Springen
        </p1>
      </div>

		</div>

		<div id="footer">
			&copy; 2019 - <b href="#" id="dev"><a href="about">R. G. Wrenn</b></a>
		</div>

	</div>

</body>
</html>
