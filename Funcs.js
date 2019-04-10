var arrPoint = [ 16,0,0];
//var listAllCaes= [ {"a": 0,"b": 0, "c" 0 } ];
var allCaves = [  { "a":0, "b":0 , "c":0} ] ;
var vistedCaves = [  { "a":0, "b":0 , "c":0} ] ;
var unVistedCaves = [  { "a":0, "b":0 , "c":0} ] ;

/*function cheeckVistedCaves(a,b,c)
{
	var curcave = vistedCaves;
	for( var i = 0; i < vistedCaves.length; i++)
	{
		if( vistedCaves[i]["a"] === a&& vistedCaves[i]["b"] === b&& vistedCaves[i]["c"] === c)
		{
			return true;
	}
	return false;
}
*/
function draw_grid( rctx, rminor, rmajor, rstroke, rfill  ) 
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( var ix = 0; ix < width; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( ix % rmajor == 0 ) { rctx.fillText( ix, ix, 10 ); }
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( iy % rmajor == 0 ) {rctx.fillText( iy, 0, iy + 10 );}
    }
    rctx.restore( );
}
function DrawLine(ctx, x1,y1,x2,y2)
{
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = "magenta";
	ctx.stroke();
}
function StampCords(intNum1, intNum2,intNum3, ctx,x,y)
{	
	var stampThis = '' +  intNum1 + ',' + intNum2 + ',' + intNum3;
	ctx.save( );
    ctx.fillStyle = 'lightgreen';
    ctx.font = "10px Arial";
	ctx.fillText( stampThis, x, y );
	ctx.fillRect(x,y,5,5,);
	ctx.restore();
}


function generateCaves(ctx)
{
	var i = 0; 
	var y = 0;
	var z = 0 
	var i = 0; 
	var yy = 0; 
	var xx = 0;
	for( i =0 ; i<=16; i++)
	{
		for( y = 0; y <= 9; y ++)
		{
			for (  z = 0;  z <= 7 ; z++)
			{
				
				if( i + y + z === 16)
				{
					//add to list 
						//calcCord(ctx,i,y,z,xx,yy);
					allCaves.push({"a": i, "b": y, "c":z});
					//StampCords(i,y,z,ctx,xx,yy);
					//add cord
					// calc cord
					//print point 
					// stamp point 
					
					calcCord(ctx,i,y,z,xx,yy);
				
				}
			}
			
		}

}
}
function nextcord(ctx, intNum1, intNum2, intNum3)
{
	var x,y; 
	var oX, oY;
	
	var a = intNum1; 
	var b = intNum2; 
	var c = intNum3;
	var amax = 16; 
	var bmax  = 9; 
	var cmax = 7; 
	
	calcCord(ctx, a,b,c,x,y); 
	oX = calcX(a,b,c);
	oY = calcY(a,b,c); 
	vistedCaves.push({"a": a, "b": b, "c":c});	
	for(var ai = a; ai >= 1; ai--)
	{
		a--;
		b = intNum2; 
		for(var bi = b; bi <= bmax; bi++)
		{
			b++;
			if(a + b + c == 16)
			{
				if(a == amax|| b == bmax|| c == cmax)
				{
					
					if(vistedCaves.indexOf(a,b,c) === -1)
					{
					calcCord(ctx, a,b,c,x,y); 
					x = calcX(a,b,c); 
					y = calcY(a,b,c); 
					DrawLine(ctx,oY,oX,y,x);
					//allCaves.push({"a": i, "b": y, "c":z});
					unVistedCaves.push({"a": a, "b": b, "c":c});
					}
				}
			}
		}
	}
		
		a = intNum1; 
		b = intNum2; 
		c = intNum3;
		for(var ai = a; ai >= 1; ai--)
	{
		a--;
		c = intNum3; 
		for(var ci = c; ci <= cmax; ci++)
		{
			c++;
			if(a + b + c == 16)
			{
				if(a == amax|| b == bmax|| c == cmax)
				{
					if(vistedCaves.indexOf(a,b,c) === -1)
					{
					calcCord(ctx, a,b,c,x,y); 
					x = calcX(a,b,c); 
					y = calcY(a,b,c); 
					DrawLine(ctx,oY,oX,y,x); 
					unVistedCaves.push({"a": a, "b": b, "c":c});
					}
				}
			}
		}
	}
		
		a = intNum1; 
		b = intNum2; 
		c = intNum3;
		for (var bi = b ; bi >=1; bi--)
		{
			b--; 
			a = intNum1; 
			for( var ai = a; ai <= amax; ai++)
			{
				a++; 
				if(a + b + c == 16)
			{
				if(a == amax|| b == bmax|| c == cmax)
				{
					if(vistedCaves.indexOf(a,b,c) === -1){
					calcCord(ctx, a,b,c,x,y); 
					x = calcX(a,b,c); 
					y = calcY(a,b,c); 
					DrawLine(ctx,oY,oX,y,x) ;
					}
				}
			}
				
			}
		}
		a = intNum1; 
		b = intNum2; 
		c = intNum3;
		for (var bi = b ; bi >=1; bi--)
		{
			b--; 
			c = intNum3; 
			for( var ci = c; ci <= cmax; ci++)
			{
				c++; 
				if(a + b + c == 16)
			{
				if(a == amax|| b == bmax|| c == cmax)
				{
						if(vistedCaves.indexOf(a,b,c) === -1){
					calcCord(ctx, a,b,c,x,y); 
					x = calcX(a,b,c); 
					y = calcY(a,b,c); 
					DrawLine(ctx,oY,oX,y,x); 
					//unVistedCaves.push({"a": a, "b": b, "c":c});
					}
				}
			}
				
			}
		}
		a = intNum1; 
		b = intNum2; 
		c = intNum3;
		for (var ci = c ; ci >=1; ci--)
		{
			c--; 
			a = intNum1; 
			for( var ai = a; ai <= amax; ai++)
			{
				a++; 
				if(a + b + c == 16)
			{
				
				if(a == amax|| b == bmax|| c == cmax)
				{
					if(vistedCaves.indexOf(a,b,c) === -1){
					calcCord(ctx, a,b,c,x,y); 
					x = calcX(a,b,c); 
					y = calcY(a,b,c); 
					DrawLine(ctx,oY,oX,y,x); 
				//	unVistedCaves.push({"a": a, "b": b, "c":c});
					}
				}
				
			}
				
			}
		}
			a = intNum1; 
		b = intNum2; 
		c = intNum3;
		for (var ci = c ; ci >=1; ci--)
		{
			c--; 
			b = intNum2; 
			for( var bi = b; bi <= bmax; bi++)
			{
				b++; 
				if(a + b + c == 16)
			{
				
				if(a == amax|| b == bmax|| c == cmax)
				{
					if(vistedCaves.indexOf(a,b,c) === -1){
					calcCord(ctx, a,b,c,x,y); 
					x = calcX(a,b,c); 
					y = calcY(a,b,c); 
					DrawLine(ctx,oY,oX,y,x); 
					//unVistedCaves.push({"a": a, "b": b, "c":c});
					}					
				}
			}
				
			}
		}
	
		
		
	
	
} 

function calcCord( ctx, posA,  posB,  posC,  x,  y)
{
	var posb1 = posB * 15; 
	var	posc1 = posC * 15;
	var posa1 = posA * 25;

	 y =  posa1 +20; 
	x = posb1 - posc1 + 200;
	StampCords(posA,posB,posC,ctx,y,x);
}
function calcY(posA,posB,posC)
{
	var posa1 = posA * 25;
	 var y =  posa1 + 20;
	return y;
}
function calcX(posA,posB,posC)
{
	var posb1 = posB * 15; 
	var	posc1 = posC * 15;
	var x = posb1 - posc1 + 200;
	return x;
}
function BizzareCaveExplore(ctx, posA,  posB,  posC)

{
	var x, y; 
	var currentCave = {"a":posA, "b":posB,"c": posC}
		//unVistedCaves.push({"a": a, "b": b, "c":c});	
	//vistedCaves.push({"a": posA, "b":posB, "c":posC});
	nextcord(ctx, posA,  posB,  posC);
	
	currentCave =  unVistedCaves.pop();
	if(vistedCaves.indexOf(currentCave["a"],currentCave["b"],currentCave["c"]) === -1)
	{
		
		BizzareCaveExplore(ctx, currentCave["a"],currentCave["b"],currentCave["c"]);
	}

/*
while((!Array.isArray(unVistedCaves) || !unVistedCaves.length))
	{
		currentCave =  unVistedCaves.pop();
		if(vistedCaves.indexOf(currentCave["a"],currentCave["b"],currentCave["c"]) === -1)
		{
			vistedCaves.push(currentCave); 
			nextcord(ctx, currentCave["a"],currentCave["b"],currentCave["c"]);
		}
	}
	*/
	
	
	
//BizzareCaveExplore(ctx, currentCave["a"],currentCave["b"],currentCave["c"]);
	
	
	
}


