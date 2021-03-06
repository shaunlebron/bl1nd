
Blind.Mapper = Blind.Mapper || {};

window.addEventListener('load', function() {
    document.getElementById('open-file').addEventListener('change', Blind.Mapper.loader.handleOpenFile, false);

    Blind.canvas = document.getElementById('c');
    Blind.ctx = Blind.canvas.getContext('2d');

    var w = Blind.canvas.width = 720;
    var h = Blind.canvas.height = w/16*9;

    Blind.assets.load(function(){
        Blind.input.init();
        Blind.Mapper.loader.restore();
        Blind.executive.start();
    });
});

// MODE SWITCHING

Blind.Mapper.setMode = function(mode) {
    $('#edit-btn').removeClass('active');
    $('#play-btn').removeClass('active');

    $('#'+mode+'-btn').addClass('active');

    $('div.edit-control').css({'visibility': (mode=='edit' ? 'visible' : 'hidden')});

    Blind.setScene(Blind.Mapper['scene_'+mode]);
}

Blind.Mapper.createScreenshot = function() {
    var btn = document.getElementById("screenshot-button");
    btn.href = Blind.canvas.toDataURL();
    btn.download = "Blind-Mapper-"+((new Date).toLocaleString())+".png";
}
