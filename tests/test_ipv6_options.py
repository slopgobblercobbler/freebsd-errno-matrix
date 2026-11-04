import json
import os
import unittest

class TestIpv6Options(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'ipv6_options.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_ipv6_constants(self):
        self.assertEqual(self.data['IPV6_UNICAST_HOPS'], 4)
        self.assertEqual(self.data['IPV6_V6ONLY'], 27)
        self.assertEqual(self.data['IPV6_CHECKSUM'], 26)

if __name__ == '__main__':
    unittest.main()
