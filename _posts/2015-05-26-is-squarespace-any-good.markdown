---
layout: post
title:  "Getting to know Squarespace"
date:   2015-05-26 20:53:00
categories: CMS Squarespace
---

A few years back myself and [@spyou](http://twitter.com/spyou) found ourselves discussing the concept of a SaaS CMS over a smoke break ( something that neither of us do anymore ). He had a few ideas about how it would fit together. I obviously saw the benefits, but wasn't convinced, mainly from my own experience of the issues of sending content and configuration over the REST, but also the compexity of developing a CMS from scratch in an era where so many solid solutions already existed and the sheer volume of feature expected of a CMS would make getting to MVP a lengthy struggle.

Spin forward a couple of years. @spyou moved on and created [digestive.io](http://digestive.io) as CookiesHQ's pet project, which insidently has nothing to do with CMS, and Squarespace starts to gain critical mass.

## What is Squarespace?

<blockquote>
  <p>Squarespace is a SaaS-based content management system (CMS) which is composed of a website builder, blogging platform and hosting service. The service allows individuals and businesses to create and maintain websites and blogs.</p>
  <p>Since launching in 2004, Squarespace has grown to 441 employees and millions of users have created websites on the Squarespace platform.</p>
  <cite><a href="http://en.m.wikipedia.org/wiki/Squarespace">http://en.m.wikipedia.org/wiki/Squarespace</a></cite>
</blockquote>

Imagine 1&1mywebsite.com (sic) but built with developer sensibilities. Essentially it has two applications. The first allows the technically uninitiated to signup and build a web site from a relatively limited, but never the less, well designed set of templates. To achieve this you need a base level account, with comes in at $8 PCM. This gives you a light set of configuration options, such a colours, fonts and imagery and some extra basics like custom domains which can either be supplied by Squarespace or a 3rd party. CMS features are basic, there is a simple media manager, you can work in markdown or basic WYSIWYGs similar to OctoberCMS. I don't think basic features sets are a draw back in this instance, in my opinion most of the mature CMSs suffer from unnecessary complexity due to feature bloat.

The second application is a developer mode. This is available to business accounts that start at around $20 PCM. Essentially this gives you a GIT repo of the theme that you can checkout and work on locally then push for deployment.

This is an interesting approach. I always thought a SaaS CMS would serve an API which did eventually manifested itself in services like [http://contentful.com](http://contentful.com). The reality of which transcended CMS in to an open data style 'model everything with meta' approach. This seemed like an obvious move but the added flexibility brings complexity in set up and consumption and hits performance.

The Squarespace theme is essentially a set of what seems to be handlebars templates, JSON configuration and less scripts. There is also a liberal smattering of YUI ( an underrated old friend )  so it all feels familiar. I went from creating an account to making some code changes in a couple of hours with no previous experience and relying purely on the documentation and code examples.

I wanted to understand Squarespace. From what I had heard it could potentially fill a gap in the £1000 quick web builds that we are often asked to produce at TheAgency. I have always believed that as these could be profitable if we could move quickly on them and on the understanding that they didn't increase our support and maintenance footprint. Squarespace seems to deliver on this but realistically only using one of the off the shelf templates as a start point.

## Workflow headaches

The main issue I have with it so far is the work flow. I have only found one way of running the site in a local development environment.

[https://github.com/kitajchuk/node-squarespace-server](https://github.com/kitajchuk/node-squarespace-server)

This runs a local node server that uses the Squarespace API to interact with the live data. Unfortunately, it doesn't seem to work very well. To date it hasn't complied any Less changes and you need to stop / start and clear the cache to see changes made in the on the Squarespace site.

This will improve and it is ok for initial development, however I can see it becoming an issue once the site is live. The only way to make a staging site is to create a separate account which doesn't feel right. It would also have its own repo rather than its own branch. Therefore, working on projects that share themes with a team will be difficult along with long term support and maintenance.

## Where does it fit?

I would say it would work well for a freelancer being asked to produce £1000 to £3000 sites. If the project is managed well and the customer has a direct relationship with Squarespace. It's simple enough to use, it's hosted and therefore managed and it needn't create much of an overhead moving forward.

I am currently working on two Squarespace sites with possibly a third in the pipe, it's early days but I will report back in further posts as development progresses.

<em>May 2015. On my iPad with <a href="http://bywordapp.com/">byword</a> in Valencia, Spain.</em>
