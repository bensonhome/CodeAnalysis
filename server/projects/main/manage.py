#!/usr/bin/env python
"""
服务启动脚本
"""

# coding:utf-8
import os
import sys


if __name__ == "__main__":

    django_setting_module = os.environ.get("DJANGO_SETTINGS_MODULE", "codedog.settings.local")
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", django_setting_module)

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
