import json
import os
import unittest

class TestSocketMulticast(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_socket_ip_multicast.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_multicast_options(self):
        self.assertEqual(self.data['IP_MULTICAST_IF'], 9)
        self.assertEqual(self.data['IP_ADD_MEMBERSHIP'], 12)

if __name__ == '__main__':
    unittest.main()
