import json
import os
import unittest

class TestAddressFamilies(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'address_families.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_canonical_families(self):
        self.assertEqual(self.data['AF_INET'], 2)
        self.assertEqual(self.data['AF_INET6'], 28)
        self.assertEqual(self.data['AF_UNIX'], 1)

if __name__ == '__main__':
    unittest.main()
