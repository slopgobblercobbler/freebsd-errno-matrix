import json
import os
import unittest

class TestIpOptions(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'ip_options.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_ip_constants(self):
        self.assertEqual(self.data['IP_HDRINCL'], 2)
        self.assertEqual(self.data['IP_TOS'], 3)
        self.assertEqual(self.data['IP_TTL'], 4)
        self.assertEqual(self.data['IP_ADD_MEMBERSHIP'], 12)

if __name__ == '__main__':
    unittest.main()
