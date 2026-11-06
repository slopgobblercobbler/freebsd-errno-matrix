import json
import os
import unittest

class TestSocketTosConstants(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_socket_ip_tos_constants.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_tos_constants(self):
        self.assertEqual(self.data['IPTOS_LOWDELAY'], "0x10")
        self.assertEqual(self.data['IPTOS_THROUGHPUT'], "0x08")

if __name__ == '__main__':
    unittest.main()
