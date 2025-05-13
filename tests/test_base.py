import pytest

class TestBaseModule:
    """Base test class for core module testing."""

    @pytest.mark.core_module
    def test_base_environment_setup(self, sample_test_fixture):
        """Verify the basic testing environment is correctly set up."""
        assert 'key1' in sample_test_fixture
        assert sample_test_fixture['key2'] == 42

    def test_import_path(self):
        """Ensure project import path is correctly configured."""
        import sys
        project_root = sys.path[0]
        assert project_root is not None
        assert isinstance(project_root, str)