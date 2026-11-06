import json
import os
import unittest

class TestProcGroups(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_sysctl_kern_proc_groups.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_groups(self):
        self.assertEqual(self.data['KERN_PROC_GROUPS'], 34)
        self.assertEqual(self.data['NGROUPS_MAX'], 1024)

if __name__ == '__main__':
    unittest.main()
