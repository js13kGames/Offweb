class Hook extends Entity {
  constructor() {
    super({s: 'hidden'});
  }

  render(ctx, dt, ms) {
    this.beginRender(ctx);
    ctx.beginPath();
    var color = (this.p.bad) ? COLOR_RED : ((this.p.special) ? COLOR_BLUE : COLOR_PURPLE);
    ctx.fillStyle = color;
    ctx.arc(0, 0, HOOK_RADIUS, 0, PI2);
    ctx.fill();
    this.endRender(ctx);
  }

  states() {
    return {
      hidden: {s: 0, c: 0.5},
      visible: {s: 1, c: 0.5},
      used: {s: 1, c: 1}
    };
  }

  animations() {
    return {
      'hidden→visible': {_d: 500, _e: 'out'},
      'visible→used':   {_d: 500, _e: 'out'}
    };
  }
}
