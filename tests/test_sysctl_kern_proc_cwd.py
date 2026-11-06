import json
import os
import unittest

class TestProcCwd(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_sysctl_kern_proc_cwd.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_cwd(self):
        self.assertEqual(self.data['KERN_PROC_CWD'], 36)
        self.assertEqual(self.data['MAXPATHLEN'], 1024)

if __name__ == '__main__':
    unittest.main()
