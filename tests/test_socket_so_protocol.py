import json
import os
import unittest

class TestSocketProtocol(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_socket_so_protocol.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_protocols(self):
        self.assertEqual(self.data['SO_PROTOCOL'], 4118)
        self.assertEqual(self.data['IPPROTO_RAW'], 255)

if __name__ == '__main__':
    unittest.main()
