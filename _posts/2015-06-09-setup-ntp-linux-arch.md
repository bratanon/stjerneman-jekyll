---
layout: post
title: Setup ntp Linux Arch
type: post
published: true
comments: true
---
A quick guide on how to setup ntp with linux arch.

<!--more-->

Install the required package called `npt` https://www.archlinux.org/packages/?name=ntp.

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

Once you have systemd managing this operation, you should never have to worry about setting the clock agian.
