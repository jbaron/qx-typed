Introduction
============

This is a small test application that demonstrates how you can easily use Qooxdoo from 
a TypeScript project. This application can also serve as a template to build your own application.

The easiest way is to try it out and get started is:

- Download this application
- Download the CATS editor, specially designed for developing with TypeScript.
  You can get it from https://github.com/jbaron/cats
- Open this application folder as a project in CATS.

From there on it feels very much like a tradditional Java or C# development cycle. 
Change the code, compile, run.

Right now this build and tested using Qooxdoo 5.0.1 and TypeScript 1.8.


How to get started
==================

All you really need to do is implement a function with the following signature: 

    someFunctionName(app: qx.application.Standolone): void

and then register it:

    qx.registry.registerMainMethod(someFunctionName);

Within this function you can use all the Qooxdoo widgets you like and it is behaves 
just like a normal Qooxdoo application. The benefit is that because of TypeScript and 
CATS you get all kind of benefits like codecompletion, type checking and easy navigation.

You can use the provided test application (application.ts) as an example to see how to 
create some simple widgets. For more examples you can always check the CATS editor itself.


Background
==========

For the CATS editor, I wanted to validate if Qooxdoo would be a good fit. So can Qooxdoo be used with 
TypeScript and having the best of both worlds: a proven set of widgets with the strong typing that TypeScript brings to the table.

Additional I wanted to be able to use CATS to develop CATS without having to use the normal Qooxdoo tooling set (generate.py stuff)



License
=======

This application uses much of Qooxdoo and for those part the same license applies as Qooxdoo. So either LGPL or EPL.
See also qooxdoo.org for more details.

For the remaining part the Apache License is applicable (mainly the qooxdoo.d.ts file).

Donate
======

Donations are very welcome. Using the link below, you can make a one-time or recurring donation:

[Sponsor this project](https://github.com/sponsors/jbaron?o=sd&sc=t) 


Or use 

[<img src="https://www.paypalobjects.com/en_US/NL/i/btn/btn_donateCC_LG.gif">](https://www.paypal.com/donate/?hosted_button_id=725MCH6K8GHKG)

And let us know if you or your company would like to be listed as a sponsor.


