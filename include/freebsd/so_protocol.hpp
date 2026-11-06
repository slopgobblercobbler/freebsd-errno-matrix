#pragma once
#include <string_view>

namespace freebsd {
struct SoProtocolDef {
    static constexpr int opt_name = 0x1028;
    static constexpr std::string_view name = "SO_PROTOCOL";
    static constexpr std::string_view desc = "Retrieve underlying protocol identifier for socket descriptor";
};
}
