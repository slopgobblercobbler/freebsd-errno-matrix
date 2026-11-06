import json
import os
import unittest

class TestProcArgs(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_sysctl_kern_proc_args.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_args(self):
        self.assertEqual(self.data['KERN_PROC_ARGS'], 7)
        self.assertEqual(self.data['KERN_PROC_PATHNAME'], 12)

if __name__ == '__main__':
    unittest.main()
