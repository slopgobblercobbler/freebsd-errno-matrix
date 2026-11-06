import json
import os
import unittest

class TestSocketTimestamp(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_socket_so_timestamp.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_timestamps(self):
        self.assertEqual(self.data['SO_TIMESTAMP'], "0x0400")
        self.assertEqual(self.data['SO_BINTIME'], "0x2000")

if __name__ == '__main__':
    unittest.main()
