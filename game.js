var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('startScreen', 'path_to_start_screen_image');
    this.load.image('gameScreen', 'path_to_game_screen_image');
}

var startScreen;
var gameStarted = false;

function create() {
    startScreen = this.add.image(400, 300, 'startScreen').setInteractive();
    
    startScreen.on('pointerdown', function () {
        if (!gameStarted) {
            gameStarted = true;
            startScreen.setTexture('gameScreen');
        }
    });
}

function update() {
    // 이 곳에 게임 로직을 업데이트합니다.
}
