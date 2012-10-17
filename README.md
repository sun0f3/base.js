## Description
  Base.js gives Base Class with binding, events and defaults params.
  Base.js more smallest than Backbone.js but gives similar abilities.
  builded with [blacksmith tool](https://github.com/varlamoved/blacksmith)

## Usage(example)
```javascript
  var Point = Base.extend({

    defaults: {
      size:  80,
      color: 'red',
      x: 0,
      y: 0,
      el: '<div class="point"></div'
    },

    initialize: function(){
    },

    move: function(new_coords){
      this.x = new_coords['x'];
      this.y = new_coords['y'];
      this.trigger('moved');
    }
  });


  var Scene = Base.extend({
    $el: $('#scene'),  

    defaults: {
      points: [],
    },

    initialize: function(){
      var point1, point2;
      point1 = new Point({x: 100, y: 100}) // color will be 'red'
      point2 = new Point({x: 200, y: 150, color: 'blue'})
      _add(point1);
      _add(point2);
    },

    redraw: function(){
      //...
    },

    // private

    _add: function(point){
      this.point.push(point);
      point.on('moved', self.redraw)
    
    }
  });

  new Scene();
```
