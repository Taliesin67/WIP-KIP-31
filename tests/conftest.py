import pytest
import sys
import os

# Add project root to Python path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

@pytest.fixture
def sample_test_fixture():
    """A sample test fixture for demonstration."""
    return {
        'key1': 'value1',
        'key2': 42
    }

def pytest_configure(config):
    """Configuration hook for custom pytest settings."""
    config.addinivalue_line(
        "markers", 
        "core_module: mark a test as a core module test"
    )