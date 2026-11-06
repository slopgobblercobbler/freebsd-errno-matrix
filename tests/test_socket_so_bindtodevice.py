import json
import os
import unittest

class TestSocketBindToDevice(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_socket_so_bindtodevice.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_bind(self):
        self.assertEqual(self.data['SO_BINDTODEVICE'], 4120)
        self.assertEqual(self.data['IFNAMSIZ'], 16)

if __name__ == '__main__':
    unittest.main()
