import json
import os
import unittest

class TestSocketSoTimestamp(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_socket_so_timestamp.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_timestamp_options(self):
        self.assertEqual(self.data['SO_TIMESTAMP'], 1024)
        self.assertEqual(self.data['SCM_TIMESTAMP'], 2)

if __name__ == '__main__':
    unittest.main()
