# -*- coding: utf-8 -*-
"""
鉴权管理 models
"""

from django.contrib.auth.models import AbstractUser
from django.db import models


class UserProfile(AbstractUser):
    """用户信息
    """
    nickname = models.CharField(max_length=64, help_text="用户昵称")
