p = document.querySelector(".man");
o = document.querySelector(".ob");
h = document.querySelector("h1");
hs1 = document.querySelectorAll("h1")[1];
cs1 = document.querySelectorAll("h1")[2];

mul = 100;
l = "100px";
lp = 1;

function ch(d)
{
  c = Number(l[0]);
  if(c === 0 && d === -1) return;
  if(c === 2 && d === 1) return;
  c += d;
  lp += d;
  c *= mul;
  ll = c.toString() + "px";
  l = ll;
}

function move(a)
{
  switch(a)
  {
    case "ArrowRight": ch(1);
    break;
    case "ArrowLeft": ch(-1);
    break;
  }
  p.style.left = l;
}

document.addEventListener("keydown",
function(e){
  move(e.key);
});

tbx = 0
tex = 0
    
function checkd() {
  if (tex < tbx)
  {
    ch(-1);
  }
  if (tex > tbx)
  {
    ch(1);
  }
}

document.addEventListener('touchstart', e => {
  tbx = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  tex = e.changedTouches[0].screenX
  checkd()
})

t = 100;
speed = 2;
out = 0;
x = 1;
hs = 0;
cs = 0;
limit = 400;
cst = "Current Score - 0";
hst = "High Score - 0";

function chob()
{
  cs++;
  cst = "Current Score - " + String(cs);
  cs1.innerHTML = cst; 
  if(hs < cs)
  {
    hs = cs;
    hst = "High Score - " + String(hs);
    hs1.innerHTML = hst;
    hs1.style.backgroundColor = "yellow";
  }
  t += speed;
  if(t > 390 && lp === x)
  {
    h.innerHTML = "Out, Press Enter or Click Here";
    h.style.backgroundColor = "blue";
    out = 1;
  }
  if(t > 450)
  {
    if(cs > limit)
    {
      speed++;
      limit += 500;
    }
    t = 100;
    prx = x;
    x = Math.floor(Math.random() * 3);
    if(prx === x)
    {
      x++;
      x %= 3;
    }
    obl = String(x * 100) + "px";
    o.style.left = obl;
  }
  tt = t.toString() + "px";
  o.style.top = tt;
  if(!out) window.requestAnimationFrame(chob);
}

window.requestAnimationFrame(chob);

document.addEventListener("keydown",
function(e){
  if(e.key == "Enter")
  {
    h.innerHTML = "Move Left or Right";
    h.style.backgroundColor = "white";
    hs1.style.backgroundColor = "white";
    out = 0;
    cs = 0;
    speed = 4;
    t = 100;
    chob();
  }
});

h.addEventListener("click", () => {
  h.innerHTML = "Move Left or Right";
  h.style.backgroundColor = "white";
  hs1.style.backgroundColor = "white";
  out = 0;
  cs = 0;
  speed = 4;
  t = 100;
  chob();
})