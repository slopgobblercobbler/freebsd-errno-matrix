import json
import os
import unittest

class TestSocketSoProtocol(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_socket_so_protocol.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_options(self):
        self.assertEqual(self.data['SO_PROTOCOL'], 38)
        self.assertEqual(self.data['SO_ACCEPTCONN'], "0x0002")

if __name__ == '__main__':
    unittest.main()
