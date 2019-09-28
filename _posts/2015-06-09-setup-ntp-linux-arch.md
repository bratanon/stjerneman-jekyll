---
layout: post
title: Setup ntp Linux Arch
type: post
published: true
comments: true
disqus_id: 03a33a9e-5e0f-476f-94a1-c2395c6bc0f4
tags:
  - Linux
  - Arch
  - NTP
---
A quick guide on how to setup ntp with linux arch.

<!--more-->

NPT or Network Time Protocol is a protocol for clock synchronization.

To use ntp in Linux arch you have to install the required package called `npt` [https://www.archlinux.org/packages/?name=ntp](https://www.archlinux.org/packages/?name=ntp).

```sh
# pacman -S ntp
```

Enable it at boot so every time you boot the system the clock will be synchronized.

```sh
# systemctl enable ntpd.service
```

Update the time.

```sh
# ntpd -qg
```

Once you have systemd managing this operation, you should never have to worry about setting the clock again.
