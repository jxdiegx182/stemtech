/* Programa: grafclav.c */

#include <graphics.h>

#include <stdlib.h>

#include <stdio.h>

#include <conio.h>

#include <math.h>

#define PI 3.1416

main()

{

int tarjeta, modo, error, n, i, v;

float r, a, ia, x1, y1, x2, y2;

detectgraph(&tarjeta, &modo);

initgraph(&tarjeta, &modo, "C:\\TC\\BGI");

error=graphresult();

if(error){

}

printf("%s", grapherrormsg(error));

getch();

else{

outtextxy(4, 4, "Número de vértices: "); scanf("%d", &n);

outtextxy(4, 26, "Radio: "); scanf("%f", &r);

a=0;

ia=2*PI/n;

for(v=1; v<=n; v++){

for(i=1; i<=n-1; i++){

x1=getmaxx()/2 + r*cos(a);

y1=getmaxy()/2 + r*sin(a);

putpixel(x1, getmaxy() - y1, WHITE);

x2=getmaxx()/2 + r*cos(a + ia*i);

y2=getmaxy()/2 + r*sin(a + ia*i);

line(x1, y1, x2, y2);

}
 
a = a + ia;
delay(100);

}
}
getch();
closegraph();

}   