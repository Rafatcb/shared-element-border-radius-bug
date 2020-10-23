# `borderRadius` not animating when transitioning

This is an reproducible demo for [this issue](https://github.com/IjzerenHein/react-navigation-shared-element/issues/110) from `react-navigation-shared-element`.

## Description

I'm trying to transition from:

1) Screen with a square-element with `borderRadius: 16`; to
2) Screen with a circle

And the problems are:

1) The default Android screen transition is shown (from bottom to top)
2) `borderRadius` animate only when going back from the second screen
3) The `background-color` didn't animate either, even though my real app doesn't need it

| My app | Simple repro I created |
| -------- | ------------------------- |
| ![myapp](https://user-images.githubusercontent.com/26308880/97045506-3cff6380-154c-11eb-9cff-2d4d4b7537c7.gif) | ![repro](https://user-images.githubusercontent.com/26308880/97045501-3b35a000-154c-11eb-99fb-6eff6cbc3676.gif)  |
