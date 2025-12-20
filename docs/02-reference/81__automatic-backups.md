---
title: Automatic Backups
description: Automatic Backups
caption: Automatic Backups
---

# Automatic Backups

Drafft automatically creates backups of your projects. These backups are stored in a folder called `backups` in the same location as your project files.

## Backup Location

The backup location is determined by the operating system.

- Windows: `%AppData%\Roaming\Drafft-2\backups`
- MacOS: `~/Library/Application Support/Drafft-2/backups`
- Linux: `~/.config/Drafft-2/backups`

## Backup Format

Backups are stored in a JSON format. Each backup file is named with the project name and a timestamp.

## Backup Frequency

Backups are created automatically when you open a project.

## Backup Retention

Backups are retained indefinitely by default, but a maximum of 10 backups are kept.

# Complementary Backups

In addition to the automatic backups, Drafft also supports complementary backups.These backups can be configured in the app settings. You can set the frequency of these backups, the maximum number of backups to keep, and the location where they will be stored.

:::tip
Complementary are also executed when you open a project.
:::
