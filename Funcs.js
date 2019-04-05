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
	var stampThis = '' +  intNum1 + ',' + intNum2 + ',' + intNum2;
	ctx.save( );
    ctx.fillStyle = 'lightgreen';
    ctx.font = "10px Arial";
	ctx.fillText( stampThis, x, y );
	ctx.fillRect(x,y,5,5,);
	ctx.restore();
}

function BizzareCaveExplore( ctx)
{
 // c is constant
// if a is souce let down x < a 
//let up  y > b 

// conversion  X + Y = A + B. The sum of the coordinates never changes 

// source can go to zero 

// c can not be larger then 7 

// max cord limits (16, 9, 7) example  (6,10,0) violates this limit 





 
}
function CheeckValidCord(intNum1, intNum2,intNum3,) 
{
	var a = intNum1; 
	var b = intNum2; 
	var c = intNum3;
	
	if( a > 16 || a < 0)
	{
		return false; 
	}
		if( b >  9 || b < 0)
	{
		return false; 
	}
	
		if( c >  7 || c < 0)
	{
		return false; 
	}
	
	if( a + b + c == 16)
	{
		return true;
	}
	return false; 
	
}



