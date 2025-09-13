"""
Core Utilities Test Module

This module contains comprehensive tests for core utility functions,
demonstrating the testing framework's capabilities and ensuring
fundamental system components work correctly.
"""

import pytest
from typing import Any, Callable

from tests import (
    safe_test_wrapper, 
    setup_test_environment, 
    teardown_test_environment
)

def test_safe_test_wrapper():
    """
    Test the safe_test_wrapper utility function from __init__.py
    
    Validates that the wrapper correctly captures and handles exceptions
    while preserving the original function's behavior.
    """
    def dummy_function(x: int) -> int:
        return x * 2
    
    wrapped_func = safe_test_wrapper(dummy_function)
    
    assert wrapped_func(5) == 10
    
    def error_function() -> None:
        raise ValueError("Test error")
    
    with pytest.raises(ValueError):
        safe_test_wrapper(error_function)()

def test_core_environment_setup():
    """
    Verify that test environment setup functions work as expected.
    
    This test ensures that setup and teardown functions can be called
    without raising unexpected exceptions.
    """
    try:
        setup_test_environment()
        teardown_test_environment()
    except Exception as e:
        pytest.fail(f"Test environment setup/teardown failed: {e}")

def test_type_safety():
    """
    Demonstrate type safety and type-checking capabilities.
    
    Validates that type hints and basic type checking work correctly.
    """
    def strict_type_function(value: int) -> str:
        return str(value)
    
    assert strict_type_function(42) == "42"
    
    def unsafe_function(value: Any) -> str:
        if not isinstance(value, int):
            raise TypeError("Input must be an integer")
        return str(value)
    
    with pytest.raises(TypeError):
        unsafe_function("not an integer")  # type: ignore