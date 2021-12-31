# -*- coding: utf-8 -*-
"""
base - base seralizers
"""

from rest_framework import serializers


class CDBaseModelSerializer(serializers.ModelSerializer):
    """CDBaseModel 序列化
    """
    creator = serializers.StringRelatedField()
    created_time = serializers.StringRelatedField()
    modifier = serializers.StringRelatedField()
    modified_time = serializers.StringRelatedField()
    deleter = serializers.StringRelatedField()
    deleted_time = serializers.StringRelatedField()
