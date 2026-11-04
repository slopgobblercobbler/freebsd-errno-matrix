import json
import os
import unittest

class TestResourceLimits(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'resource_limits.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_limits(self):
        self.assertEqual(self.data['RLIMIT_CPU'], 0)
        self.assertEqual(self.data['RLIMIT_STACK'], 3)
        self.assertEqual(self.data['RLIMIT_NOFILE'], 8)

if __name__ == '__main__':
    unittest.main()
