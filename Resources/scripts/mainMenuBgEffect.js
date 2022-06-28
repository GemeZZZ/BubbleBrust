
//All Required Images Are Here........................................................................
const bgImage = new Image();
bgImage.src = "Resources/Backgrounds/Ocean1.jpg";

//PLAYER IMAGE.................................................
const playerImgLeftFacing = new Image();
playerImgLeftFacing.src = "Resources/spritesheet/player/red.png";

const playerImgRightFacing = new Image();
playerImgRightFacing.src = "Resources/spritesheet/player/right/red.png";

//All Enemy Images Coming From Right And Left Facing...
const redEnemy_fromRight = new Image();
redEnemy_fromRight.src = "Resources/spritesheet/enemy/left/red.png";

const yellowEnemy_fromRight = new Image();
yellowEnemy_fromRight.src = "Resources/spritesheet/enemy/left/yellow.png";

const greenEnemy_fromRight = new Image();
greenEnemy_fromRight.src = "Resources/spritesheet/enemy/left/green.png";

const orangeEnemy_fromRight = new Image();
orangeEnemy_fromRight.src = "Resources/spritesheet/enemy/left/orange.png";

const pinkEnemy_fromRight = new Image();
pinkEnemy_fromRight.src = "Resources/spritesheet/enemy/left/pink.png";

const blueEnemy_fromRight = new Image();
blueEnemy_fromRight.src = "Resources/spritesheet/enemy/left/blue.png";

//All Enemy Images Coming From Left And Right Facing...
const redEnemy_fromLeft = new Image();
redEnemy_fromLeft.src = "Resources/spritesheet/enemy/right/red.png";

const yellowEnemy_fromLeft = new Image();
yellowEnemy_fromLeft.src = "Resources/spritesheet/enemy/right/yellow.png";

const greenEnemy_fromLeft = new Image();
greenEnemy_fromLeft.src = "Resources/spritesheet/enemy/right/green.png";

const orangeEnemy_fromLeft = new Image();
orangeEnemy_fromLeft.src = "Resources/spritesheet/enemy/right/orange.png";

const pinkEnemy_fromLeft = new Image();
pinkEnemy_fromLeft.src = "Resources/spritesheet/enemy/right/pink.png";

const blueEnemy_fromLeft = new Image();
blueEnemy_fromLeft.src = "Resources/spritesheet/enemy/right/blue.png";

//Enemy Jelly Fish Images...................................................
const jellyFish1 = new Image();
jellyFish1.src = 'Resources/spritesheet/enemy_jellyfish/animated_jellyfish/Jellyfish1.png';

const jellyFish2 = new Image();
jellyFish2.src = 'Resources/spritesheet/enemy_jellyfish/animated_jellyfish/Jellyfish2.png';

const jellyFish3 = new Image();
jellyFish3.src = 'Resources/spritesheet/enemy_jellyfish/animated_jellyfish/Jellyfish3.png';

const jellyFish4 = new Image();
jellyFish4.src = 'Resources/spritesheet/enemy_jellyfish/animated_jellyfish/Jellyfish4.png';

const jellyFish5 = new Image();
jellyFish5.src = 'Resources/spritesheet/enemy_jellyfish/animated_jellyfish/Jellyfish5.png';

const jellyFish6 = new Image();
jellyFish6.src = 'Resources/spritesheet/enemy_jellyfish/animated_jellyfish/Jellyfish6.png';

//Bonus Fish Images Coming From Right And Facing To Left.........................................
const bonusFish000_right = new Image();
bonusFish000_right.src = "Resources/spritesheet/Bonus_Fish/left/swim_000.png";

const bonusFish001_right = new Image();
bonusFish001_right.src = "Resources/spritesheet/Bonus_Fish/left/swim_001.png";

const bonusFish002_right = new Image();
bonusFish002_right.src = "Resources/spritesheet/Bonus_Fish/left/swim_002.png";

const bonusFish003_right = new Image();
bonusFish003_right.src = "Resources/spritesheet/Bonus_Fish/left/swim_003.png";

const bonusFish004_right = new Image();
bonusFish004_right.src = "Resources/spritesheet/Bonus_Fish/left/swim_004.png";

const bonusFish005_right = new Image();
bonusFish005_right.src = "Resources/spritesheet/Bonus_Fish/left/swim_005.png";

const bonusFish006_right = new Image();
bonusFish006_right.src = "Resources/spritesheet/Bonus_Fish/left/swim_006.png";

const bonusFish007_right = new Image();
bonusFish007_right.src = "Resources/spritesheet/Bonus_Fish/left/swim_007.png";

const bonusFish008_right = new Image();
bonusFish008_right.src = "Resources/spritesheet/Bonus_Fish/left/swim_008.png";

const bonusFish009_right = new Image();
bonusFish009_right.src = "Resources/spritesheet/Bonus_Fish/left/swim_009.png";

const bonusFish010_right = new Image();
bonusFish010_right.src = "Resources/spritesheet/Bonus_Fish/left/swim_010.png";

const bonusFish011_right = new Image();
bonusFish011_right.src = "Resources/spritesheet/Bonus_Fish/left/swim_011.png";

//Bonus Fish Images Coming From Left And Facing To Right.........................................
const bonusFish000_left = new Image();
bonusFish000_left.src = "Resources/spritesheet/Bonus_Fish/right/swim_000.png";

const bonusFish001_left = new Image();
bonusFish001_left.src = "Resources/spritesheet/Bonus_Fish/right/swim_001.png";

const bonusFish002_left = new Image();
bonusFish002_left.src = "Resources/spritesheet/Bonus_Fish/right/swim_002.png";

const bonusFish003_left = new Image();
bonusFish003_left.src = "Resources/spritesheet/Bonus_Fish/right/swim_003.png";

const bonusFish004_left = new Image();
bonusFish004_left.src = "Resources/spritesheet/Bonus_Fish/right/swim_004.png";

const bonusFish005_left = new Image();
bonusFish005_left.src = "Resources/spritesheet/Bonus_Fish/right/swim_005.png";

const bonusFish006_left = new Image();
bonusFish006_left.src = "Resources/spritesheet/Bonus_Fish/right/swim_006.png";

const bonusFish007_left = new Image();
bonusFish007_left.src = "Resources/spritesheet/Bonus_Fish/right/swim_007.png";

const bonusFish008_left = new Image();
bonusFish008_left.src = "Resources/spritesheet/Bonus_Fish/right/swim_008.png";

const bonusFish009_left = new Image();
bonusFish009_left.src = "Resources/spritesheet/Bonus_Fish/right/swim_009.png";

const bonusFish010_left = new Image();
bonusFish010_left.src = "Resources/spritesheet/Bonus_Fish/right/swim_010.png";

const bonusFish011_left = new Image();
bonusFish011_left.src = "Resources/spritesheet/Bonus_Fish/right/swim_011.png";

//BONUS ITEMS ARRAY ...................................................................

window.addEventListener('load',()=>{
	c.drawImage(bgImage,0,0,canvas.width,canvas.height);
});

//All Required Classes Are Here.............................................................................

//Enemy Class
class enemy
{
	constructor(x,y,velocity,fromLeft,imageSource)
	{
		this.x=x;
		this.y=y;
		this.velocity=velocity;
		this.imageSource=imageSource;
		this.frame = 0;
		this.frameX = 0;
		this.frameY = 0;
		this.spriteWidth = 418;
		this.spriteHeight = 397;
		this.fromLeft=fromLeft;
		this.adjust=-63;
		this.reduce=3.5;
	}

	draw()
	{
		/*
		//Test Circle
		c.beginPath();
		c.arc(this.x,this.y,50,Math.PI*2,false);
		c.fillStyle = "red";
		c.fill();
		c.closePath();
		*/

		if(this.fromLeft==true)
		{
			switch(this.imageSource)
			{	
				case 0:
				{
					c.drawImage(redEnemy_fromLeft,this.frameX * this.spriteWidth,this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x+this.adjust,this.y+this.adjust,this.spriteWidth/this.reduce,this.spriteHeight/this.reduce);
				}
				break;

				case 1:
				{
					c.drawImage(yellowEnemy_fromLeft,this.frameX * this.spriteWidth,this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x+this.adjust,this.y+this.adjust,this.spriteWidth/this.reduce,this.spriteHeight/this.reduce);
				}
				break;

				case 2:
				{
					c.drawImage(greenEnemy_fromLeft,this.frameX * this.spriteWidth,this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x+this.adjust,this.y+this.adjust,this.spriteWidth/this.reduce,this.spriteHeight/this.reduce);
				}
				break;

				case 3:
				{
					c.drawImage(orangeEnemy_fromLeft,this.frameX * this.spriteWidth,this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x+this.adjust,this.y+this.adjust,this.spriteWidth/this.reduce,this.spriteHeight/this.reduce);
				}
				break;

				case 4:
				{
					c.drawImage(blueEnemy_fromLeft,this.frameX * this.spriteWidth,this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x+this.adjust,this.y+this.adjust,this.spriteWidth/this.reduce,this.spriteHeight/this.reduce);
				}
				break;

				case 5:
				{
					c.drawImage(pinkEnemy_fromLeft,this.frameX * this.spriteWidth,this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x+this.adjust,this.y+this.adjust,this.spriteWidth/this.reduce,this.spriteHeight/this.reduce);
				}
				break;

				default:
				{
					c.drawImage(orangeEnemy_fromLeft,this.frameX * this.spriteWidth,this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x+this.adjust,this.y+this.adjust,this.spriteWidth/this.reduce,this.spriteHeight/this.reduce);
				}
				break;
			}
		}
		else
		{
			switch(this.imageSource)
			{	
				case 0:
				{
					c.drawImage(redEnemy_fromRight,this.frameX * this.spriteWidth,this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x+this.adjust,this.y+this.adjust,this.spriteWidth/this.reduce,this.spriteHeight/this.reduce);
				}
				break;

				case 1:
				{
					c.drawImage(yellowEnemy_fromRight,this.frameX * this.spriteWidth,this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x+this.adjust,this.y+this.adjust,this.spriteWidth/this.reduce,this.spriteHeight/this.reduce);
				}
				break;

				case 2:
				{
					c.drawImage(greenEnemy_fromRight,this.frameX * this.spriteWidth,this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x+this.adjust,this.y+this.adjust,this.spriteWidth/this.reduce,this.spriteHeight/this.reduce);
				}
				break;

				case 3:
				{
					c.drawImage(orangeEnemy_fromRight,this.frameX * this.spriteWidth,this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x+this.adjust,this.y+this.adjust,this.spriteWidth/this.reduce,this.spriteHeight/this.reduce);
				}
				break;

				case 4:
				{
					c.drawImage(blueEnemy_fromRight,this.frameX * this.spriteWidth,this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x+this.adjust,this.y+this.adjust,this.spriteWidth/this.reduce,this.spriteHeight/this.reduce);
				}
				break;

				case 5:
				{
					c.drawImage(pinkEnemy_fromRight,this.frameX * this.spriteWidth,this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x+this.adjust,this.y+this.adjust,this.spriteWidth/this.reduce,this.spriteHeight/this.reduce);
				}
				break;

				default:
				{
					c.drawImage(orangeEnemy_fromRight,this.frameX * this.spriteWidth,this.frameY * this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x+this.adjust,this.y+this.adjust,this.spriteWidth/this.reduce,this.spriteHeight/this.reduce);
				}
				break;
			}
		}
	}

	update()
	{
		this.draw();
		if(this.fromLeft==true)
		{
			this.x+=this.velocity;
			if(gameFrame % 5 == 0)
			{
				this.frame++;
				if(this.frame >= 12)
				{
					this.frame=0;
				}

				if(this.frame == 3 || this.frame == 7 || this.frame == 11)
				{
					this.frameX=3;
				}
				else
				{
					this.frameX--;
				}

				if(this.frame < 3)
				{
					this.frameY=0;
				}
				else if(this.frame < 7)
				{
					this.frameY=1;
				}
				else if(this.frame < 11)
				{
					this.frameY=2;
				}
				else
				{
					this.frameY=0;
				}
			}
		}
		else
		{
			this.x-=this.velocity;
			if(gameFrame % 5 == 0)
			{
				this.frame++;
				if(this.frame >= 12)
				{
					this.frame=0;
				}

				if(this.frame == 3 || this.frame == 7 || this.frame == 11)
				{
					this.frameX=0;
				}
				else
				{
					this.frameX++;
				}

				if(this.frame < 3)
				{
					this.frameY=0;
				}
				else if(this.frame < 7)
				{
					this.frameY=1;
				}
				else if(this.frame < 11)
				{
					this.frameY=2;
				}
				else
				{
					this.frameY=0;
				}
			}
		}
	}
}

class player
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.radius=45;
		this.frameX = 0;
		this.frameY = 0;
		this.frame = 0;
		this.spriteWidth = 498;
		this.spriteHeight = 327;
		this.angle = 0;
	}

	draw()
	{
		/*
		//TestCircle
		c.beginPath();
		c.arc(this.x,this.y,this.radius,Math.PI*2,false);
		c.fillStyle = "blue";
		c.fill();
		c.closePath();
		*/
		
		c.drawImage(playerImgLeftFacing,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x-60,this.y-45,this.spriteWidth/4,this.spriteHeight/4);
	}

	update()
	{
		if(this.x>=mouse.x)
		{
			c.drawImage(playerImgLeftFacing,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x-60,this.y-45,this.spriteWidth/4,this.spriteHeight/4);
			if(gameFrame%5==0)
			{
				this.frame++;
				if(this.frame >= 12)
				{
					this.frame=0;
				}

				if(this.frame == 3 || this.frame == 7 || this.frame == 11)
				{
					this.frameX=0;
				}
				else
				{
					this.frameX++;
				}

				if(this.frame < 3)
				{
					this.frameY=0;
				}
				else if(this.frame < 7)
				{
					this.frameY=1;
				}
				else if(this.frame < 11)
				{
					this.frameY=2;
				}
				else
				{
					this.frameY=0;
				}
			}
		}
		else
		{
			c.drawImage(playerImgLeftFacing,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x-60,this.y-45,this.spriteWidth/4,this.spriteHeight/4);
			if(gameFrame%5==0)
			{
				this.frame++;
				if(this.frame >= 12)
				{
					this.frame=0;
				}

				if(this.frame == 3 || this.frame == 7 || this.frame == 11)
				{
					this.frameX=3;
				}
				else
				{
					this.frameX--;
				}

				if(this.frame < 3)
				{
					this.frameY=3;
				}
				else if(this.frame < 7)
				{
					this.frameY=4;
				}
				else if(this.frame < 11)
				{
					this.frameY=5;
				}
				else
				{
					this.frameY=3;
				}
			}
		}
		let dx = this.x-mouse.x;
		this.x -= dx/8;
		let dy = this.y-mouse.y;
		this.y -= dy/8;
	}
}

class enemyJellyFish
{
	constructor(x,y,velocity)
	{
		this.x=x;
		this.y=y;
		this.velocity=velocity;
		this.frame=1;
	}

	draw()
	{
		/*
		c.beginPath();
		c.arc(this.x,this.y,40,Math.PI*2,false);
		c.fillStyle = "red";
		c.fill();
		c.closePath();
		*/

		switch(this.frame)
		{
			case 1:
			{
				c.drawImage(jellyFish1,this.x-30,this.y-40);
			}
			break;

			case 2:
			{
				c.drawImage(jellyFish2,this.x-30,this.y-40);
			}
			break;

			case 3:
			{
				c.drawImage(jellyFish3,this.x-30,this.y-40);
			}
			break;

			case 4:
			{
				c.drawImage(jellyFish4,this.x-30,this.y-40);
			}
			break;

			case 5:
			{
				c.drawImage(jellyFish5,this.x-30,this.y-40);
			}
			break;

			case 6:
			{
				c.drawImage(jellyFish6,this.x-30,this.y-40);
			}
			break;

			default:
			{
				c.drawImage(jellyFish1,this.x-30,this.y-40);
			}
			break;
		}
	}

	update()
	{
		this.draw();
		this.y += this.velocity.y;
		this.x += this.velocity.x;
		if(gameFrame%9==0)
		{
			this.frame++;
			if(this.frame>6)
			{
				this.frame=1;
			}
		}
	}
}

class bonus_fish
{
	constructor(position,velocity,bonus,fromLeft)
	{
		this.position=position;
		this.velocity=velocity;
		this.bonus=bonus;
		this.fromLeft=fromLeft;
		this.frame = 0;
		this.spriteWidth = 548/2.1;
		this.spriteHeight = 349/2.1;
		this.adjustX = -60;
		this.adjustY = -60;
	}

	draw()
	{
		/*
		c.beginPath();
		c.arc(this.position.x,this.position.y,50,Math.PI*2,false);
		c.fillStyle = "red";
		c.fill();
		c.closePath();
		*/

		if(this.fromLeft==true)
		{
			switch(this.frame)
			{
				case 0:
				{
					c.drawImage(bonusFish000_left,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 1:
				{
					c.drawImage(bonusFish001_left,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 2:
				{
					c.drawImage(bonusFish002_left,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 3:
				{
					c.drawImage(bonusFish003_left,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 4:
				{
					c.drawImage(bonusFish004_left,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 5:
				{
					c.drawImage(bonusFish005_left,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 6:
				{
					c.drawImage(bonusFish006_left,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 7:
				{
					c.drawImage(bonusFish007_left,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 8:
				{
					c.drawImage(bonusFish008_left,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 9:
				{
					c.drawImage(bonusFish009_left,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 10:
				{
					c.drawImage(bonusFish010_left,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 11:
				{
					c.drawImage(bonusFish011_left,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				default:
				{
					c.drawImage(bonusFish000_left,this.position.x,this.position.y,this.spriteWidth,this.spriteHeight);
				}
				break;
			}
		}
		else
		{
			switch(this.frame)
			{
				case 0:
				{
					c.drawImage(bonusFish000_right,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 1:
				{
					c.drawImage(bonusFish001_right,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 2:
				{
					c.drawImage(bonusFish002_right,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 3:
				{
					c.drawImage(bonusFish003_right,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 4:
				{
					c.drawImage(bonusFish004_right,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 5:
				{
					c.drawImage(bonusFish005_right,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 6:
				{
					c.drawImage(bonusFish006_right,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 7:
				{
					c.drawImage(bonusFish007_right,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 8:
				{
					c.drawImage(bonusFish008_right,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 9:
				{
					c.drawImage(bonusFish009_right,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 10:
				{
					c.drawImage(bonusFish010_right,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				case 11:
				{
					c.drawImage(bonusFish011_right,this.position.x+this.adjustX,this.position.y+this.adjustY,this.spriteWidth,this.spriteHeight);
				}
				break;

				default:
				{
					c.drawImage(bonusFish000_right,this.position.x,this.position.y,this.spriteWidth,this.spriteHeight);
				}
				break;
			}
		}	
	}

	update()
	{
		this.draw();
		if(this.fromLeft==true)
		{
			this.position.x += this.velocity;
		}
		else
		{
			this.position.x -= this.velocity;
		}

		if(gameFrame%9==0)
		{
			this.frame++;
			if(this.frame>11)
			{
				this.frame=0;
			}
		}
	}
}

class bonusItem
{
	constructor(x,y,velocity,imageSource)
	{
		this.x=x;
		this.y=y;
		this.velocity=velocity;
		this.imageSource=imageSource;
		this.adjustX = -45;
		this.adjustY = -45;
		this.spriteWidth = 85;
		this.spriteHeight = 85;
	}

	draw()
	{
		/*
		c.beginPath();
		c.arc(this.x,this.y,45,Math.PI*2,false);
		c.fillStyle = "red";
		c.fill();
		c.closePath();
		*/

		switch(this.imageSource)
		{
			case 0:
			{
				c.drawImage(dimond,this.x+this.adjustX,this.y+this.adjustY,this.spriteWidth,this.spriteHeight);
			}
			break;

			case 1:
			{
				c.drawImage(magicBall,this.x+this.adjustX,this.y+this.adjustY,this.spriteWidth,this.spriteHeight);
			}
			break;

			case 2:
			{
				c.drawImage(goldCoin,this.x+this.adjustX,this.y+this.adjustY,this.spriteWidth,this.spriteHeight);
			}
			break;

			case 3:
			{
				c.drawImage(magicBall2,this.x+this.adjustX,this.y+this.adjustY,this.spriteWidth,this.spriteHeight);
			}
			break;

			case 4:
			{
				c.drawImage(silverCoin,this.x+this.adjustX,this.y+this.adjustY,this.spriteWidth,this.spriteHeight);
			}
			break;

			case 5:
			{
				c.drawImage(magicBall1,this.x+this.adjustX,this.y+this.adjustY,this.spriteWidth,this.spriteHeight);
			}
			break;

			default:
			{
				c.drawImage(silverCoin,this.x+this.adjustX,this.y+this.adjustY,this.spriteWidth,this.spriteHeight);
			}
			break;
		}
	}

	update()
	{
		this.draw();
		this.y+=this.velocity;
	}
}

const newImage = new Image();
newImage.src = "Resources/spritesheet/bubble/bubble.png";

let ballsArray = [];

class ball
{
	constructor(x,y,radius,color,velocity)
	{
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.velocity = velocity;
		this.reduction = 0.099;
		this.frameX = 0;
		this.frameY = 0;
		this.frame = 0;
		this.spriteWidth = 393.75;
		this.spriteHeight = 511.5;
	}

	drawBall()
	{
		/*c.beginPath();
		c.arc(this.x,this.y,this.radius,Math.PI*2,false);
		c.fillStyle = this.color;
		c.fill();*/
		//c.stroke();
		c.drawImage(newImage,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x - 100,this.y - 100,this.radius*2,this.radius*2);
	}

	updateBall()
	{
		this.drawBall();
		this.x += this.velocity.x;
		this.y += this.velocity.y;
		if(this.radius - this.reduction > 1)
		{
			this.radius -= this.reduction;
		}

		if(this.x+this.radius > canvas.width || this.x-this.radius < 0)
		{
			this.velocity.x = -this.velocity.x;
		}
		else if(this.y+this.radius > canvas.height || this.y-this.radius < 0)
		{	
			this.velocity.y = -this.velocity.y;
		}
	}
}

function createBall(x,y)
{
	this.x = x;
	this.y = y;

	let radius,color,velocity;

	//random radius
	radius = (Math.random()+0.5)*25;

	//random color
	//let colorArray = ["red","green","blue"];
	//color = colorArray[parseInt(Math.random()*colorArray.length)];
	color = "black";

	//random velocity
	velocity = {
		x: (Math.random()-0.5) * 3,
		y: (Math.random()-0.5) * 3
	}

	//passing into array
	ballsArray.push(new ball(this.x,this.y,radius,color,velocity));
}

//Initiallizing Player..................


//All Functions Are Here ...........................................................................
function spawnEnemyFish()
{
	let x,y,velocity,fromLeft,imageSource;
	fish_spawn_ID = setInterval(()=>{

		//Deciding Direction Of Fish...............................................
		var p = Math.random();
		if(p>=0.5)
		{
			fromLeft=true;
			x=-200;
			y=Math.random()*canvas.height;
			velocity=Math.random()*4.2 + 0.5;
			imageSource=parseInt(Math.random()*6);
		}
		else
		{
			fromLeft=false;
			x=canvas.width + (Math.random()*200 + 101);
			y=Math.random()*canvas.height;
			velocity=Math.random()*3.2 + 0.5;
			imageSource=parseInt(Math.random()*6);
		}

		enemyArray.push(new enemy(x,y,velocity,fromLeft,imageSource));

	},4100);
}

function spawnEnemyJellyFish()
{
	let x,y,dx,dy,velocity,theta;
	jellyFish_spawn_ID = setInterval(() => {

		x = (Math.random()) * canvas.width; //Generating random x value...................
		y = (canvas.height) + 101;
		dx = Math.random()*canvas.width;
		dy = 0;
		theta = Math.atan2(dy-y,dx-x);
		velocity = {
			x: Math.cos(theta),
			y: Math.sin(theta)
		}

		enemyJellyFishArray.push(new enemyJellyFish(x,y,velocity,theta));

	},4100);
}

function spawnBonusFish()
{
	let position,velocity,bonus,fromLeft;
	bonusFish_spawn_ID = setInterval(() => {

		var p = Math.random();
		if(p>=0.5)
		{
			fromLeft=true;
			position = {
				x: -200,
				y: Math.random() * (canvas.height/3)
			}
			velocity = Math.random()*3 + 0.5;
			bonus = {
				x: Math.random()*canvas.width,
				y: position.y
			}
		}
		else
		{
			fromLeft=false;
			position = {
				x: canvas.width + 200,
				y: Math.random()*(canvas.height/3)
			}
			velocity = Math.random()*3 + 0.5;
			bonus = {
				x: Math.random()*canvas.width,
				y: position.y
			}
		}

		bonusFishArray.push(new bonus_fish(position,velocity,bonus,fromLeft));

	},20000);
}

function dropBonus(x,y)
{
	this.x=x;
	this.y=y;
	let velocity,imageSource;
	velocity = Math.random()*1.8 + 0.3;
	imageSource = parseInt(Math.random()*5);

	bonusItemsArray.push(new bonusItem(this.x,this.y,velocity,imageSource));
}