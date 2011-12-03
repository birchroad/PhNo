# PhNo #
A set of scripts, application, whatever to make it possible for me and my
family to store, view and organize photos from any computer and preferably
device in a home. This will require a central storage of photos and the 
metadata to go with it. The processing of images will preferably be done on a 
computer with fast access to the storage of images (the same server).
All devices should be able to access the photos at the same time.
Etc, etc etc.

## Story ##
Beeing a computer geek and a family man with loads of photos from almost ten
years gave me an interesting problem. 
Everyone in the family contribute to this ever growing collection of photos
and all have some kind of input such as tags, events etc.
I have all photos stored on a server stored in a year/month/day folder structure
but searching and looking in these do take forever and is not a long term
solution. I have googled and tried a lot of different softwares but without 
finding one that I beleive fullfill all my needs and requests. 
I don't need anything fancy at all but I want to do it from several devices.
Shotwell, which is included in among others Ubuntu, is actually quite close
when it comes to functionality. What I would like to see is a somewhat more
networked solution and one that doesen't require a "fat" client got get access
to all the meta data.
Web + some other image/media serving protocol would have been perfect.
DLNA could be one such protocol.

## General layout ##
* Document type database - MongoDB to start with.
* Multi layerd, modular solution.
* It must be possible to distribute heavy tasks on multiple servers. Indexing
  5000 images should not have to take several hours.
* I must support storing the images as simple files on a regular server.
* Thumbnails should be stored separate from the original images, perhaps in the
  database.
* Writeen in Node.JS. Because I want to. I can imagine some image processing
  functions will be something like ImageMagik but it should be controlled using
  Node.


